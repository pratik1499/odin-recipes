---
description: Fix GitHub PR review comments using GitHub MCP (fetch, fix, commit, push, resolve)
---

# /snap/fix-pr-reviews — MCP-first PR Review Fixer

Handle GitHub PR review comments end-to-end using **GitHub MCP Server** for GitHub data and **Cursor** for code edits and git operations.

---

## User Input

```
$ARGUMENTS
```

---

## Usage

/snap/fix-pr-reviews <pr-number> [options]

### Required

- `<pr-number>` — Pull request number

### Optional

- `--auto-commit` — Skip commit confirmation
- `--dry-run` — Fetch and analyze comments only (no edits)

---

## Instructions

You are fixing GitHub PR review comments using GitHub MCP Server for GitHub operations and Cursor for local code changes.

---

## Absolute Rules (DO NOT VIOLATE)

1. **GitHub API access must use GitHub MCP tools only**
2. **Code changes must be done locally by Cursor**
3. **Git operations (commit/push) must be done by Cursor**
4. **Resolve review THREADS, not individual comments**
5. **Only modify code directly referenced by review comments**
6. **Reject any diff outside the review comment scope**

---

## Step 0 — Preconditions

Before proceeding, ensure:

- Current directory is a git repository
- No uncommitted local changes
- You have push access to the PR branch

❌ If any condition fails, stop and report the issue.

---

## Step 1 — Fetch PR Metadata (MCP)

Use GitHub MCP to fetch pull request details.

**Required data:**

- PR title
- Head branch
- Base branch
- PR state

❌ Abort if PR is not `OPEN`.

---

## Step 2 — Fetch Unresolved Review Threads (MCP)

### 2.1 Fetch Reviews

Fetch all PR reviews and keep only:

- `CHANGES_REQUESTED`
- `COMMENTED`

---

### 2.2 Fetch Review Comments

Fetch all inline review comments.

For each comment, extract:

- `thread_id` ✅ (mandatory)
- `path`
- `original_line`
- `diff_hunk`
- `body`
- `resolved`

Filter:

- `resolved == false`
- `path != null`

---

### 2.3 Display Summary (Read-Only)

Example:

```
PR #123 — Review comments found

src/foo.ts:42
"Add null guard before accessing user.id"

src/bar.ts:88
"This function name is misleading"
```

If no unresolved threads are found, exit successfully.

---

## Step 3 — Fix Review Comments (Cursor Only)

Process **one review thread at a time**.

---

### 3.1 Load Context

For each thread:

- Open the referenced file
- Load ±20 lines around the commented line
- Use `diff_hunk` to identify exact scope

---

### 3.2 Understand Intent

Classify the comment:

- Bug fix
- Naming / clarity
- Safety (null checks)
- Style
- Minor refactor

❌ If the comment requires architectural or cross-file changes:

- Skip the thread
- Log the reason

---

### 3.3 Apply Minimal Fix

**Constraints:**

- Edit only the referenced file
- Modify only lines within or immediately adjacent to the `diff_hunk`
- No formatting-only changes
- No unrelated refactors

---

### 3.4 Enforce Scope Guard (MANDATORY)

After each fix:

1. Generate diff
2. Validate:
   - Only one file changed
   - Changed lines intersect the review hunk

❌ If scope is violated:

- Revert changes
- Skip the thread

---

### 3.5 Track Fixes

Maintain a log:

```
thread_id: <id>
file: src/foo.ts
summary: Added null guard for user.id
```

---

## Step 4 — Commit & Push (Cursor Native)

### 4.1 Review Changes

Show:

- Diff
- Summary of fixed review threads

---

### 4.2 Commit

Default commit message:

```
Snap.PR_Fixer: address review comments

Add null guard in src/foo.ts

Rename misleading function in src/bar.ts
```

Ask for confirmation unless `--auto-commit` is provided.

---

### 4.3 Push Changes

Push to the PR head branch.

❌ If push fails, stop immediately and do NOT resolve comments.

---

## Step 5 — Resolve Review Threads (MCP)

For each successfully fixed thread:

### 5.1 Resolve Thread

Use GitHub MCP to resolve the review thread using `thread_id`.

---

### 5.2 Optional Reply

Add a reply:

```
✅ Addressed in commit <commit-hash>
```

---

## Step 6 — Final Verification (MCP)

Re-fetch unresolved review threads.

✅ Success if zero unresolved threads remain.

---

## Final Output

```
✅ PR Review Comments Addressed

PR: #123
Fixed Threads: 2
Skipped Threads: 0

Commit: abc123
Branch: feature/foo

All resolved review threads marked on GitHub.
```

## Critical Rules

### ✅ ALWAYS DO:

- Use GitHub MCP tools for all GitHub API operations
- Use Cursor tools for all code edits
- Use Cursor tools for all git operations
- Resolve review threads (not individual comments)
- Only modify code within review comment scope
- Validate scope after each fix
- Track all fixes in a log
- Push changes before resolving threads
- Verify all threads are resolved

### ❌ NEVER DO:

- Use `gh` CLI or direct GitHub API calls
- Modify code outside review comment scope
- Resolve threads before pushing changes
- Skip scope validation
- Make formatting-only changes
- Perform unrelated refactors

### ⚠️ ABSOLUTE RULES:

1. **MCP ONLY FOR GITHUB**: All GitHub operations MUST use GitHub MCP tools
2. **CURSOR FOR CODE**: All code changes MUST use Cursor tools
3. **CURSOR FOR GIT**: All git operations MUST use Cursor tools
4. **THREAD-BASED RESOLUTION**: Resolve threads, not individual comments
5. **SCOPE ENFORCEMENT**: Only modify code within review comment scope
6. **VALIDATION REQUIRED**: Validate scope after each fix
7. **PUSH BEFORE RESOLVE**: Push changes before resolving threads

---

## Reference

- GitHub MCP Server documentation
- Cursor custom command execution model
- GitHub Pull Request Review API
