# Recipedia Components - Usage Examples

## Import Components

```jsx
// Import all at once
import { 
  RecipediaHero, 
  RecipediaHeader,
  Button, 
  TestimonialCard,
  DecorationIcon 
} from './components/recipedia'

// Or import individually
import Button from './components/recipedia/Button'
import TestimonialCard from './components/recipedia/TestimonialCard'
```

---

## Button Component

### Basic Usage
```jsx
<Button>Click Me</Button>
```

### Primary Button (Orange CTA)
```jsx
<Button variant="primary" size="medium">
  Explore Recipes
</Button>
```

### Secondary Button (White with Border)
```jsx
<Button variant="secondary" size="medium">
  Learn More
</Button>
```

### Ghost Button (Transparent)
```jsx
<Button variant="ghost" size="small">
  Skip
</Button>
```

### With Click Handler
```jsx
<Button 
  variant="primary" 
  size="large"
  onClick={() => alert('Clicked!')}
>
  Get Started
</Button>
```

### Different Sizes
```jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### With Custom Classes
```jsx
<Button className="mt-4 shadow-xl">
  Custom Styled
</Button>
```

---

## TestimonialCard Component

### Basic Usage
```jsx
<TestimonialCard
  text="The recipes here are amazing!"
  userName="John Doe"
  userAvatar="/path/to/avatar.jpg"
  rating={5}
/>
```

### With Different Ratings
```jsx
<TestimonialCard
  text="Good recipes, but needs more variety."
  userName="Jane Smith"
  userAvatar="https://ui-avatars.com/api/?name=Jane+Smith"
  rating={4}
/>
```

### With UI Avatars Service
```jsx
<TestimonialCard
  text="Love the easy-to-follow instructions!"
  userName="Sarah M."
  userAvatar="https://ui-avatars.com/api/?name=Sarah+M&background=F59E0B&color=fff"
  rating={5}
/>
```

### With Custom Styling
```jsx
<TestimonialCard
  text="Fantastic collection of recipes."
  userName="Mike Johnson"
  userAvatar="/mike-avatar.jpg"
  rating={5}
  className="shadow-2xl border-2 border-recipedia-orange"
/>
```

### Multiple Testimonials
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <TestimonialCard
    text="Great recipes!"
    userName="User 1"
    userAvatar="/avatar1.jpg"
    rating={5}
  />
  <TestimonialCard
    text="Easy to follow!"
    userName="User 2"
    userAvatar="/avatar2.jpg"
    rating={5}
  />
</div>
```

---

## DecorationIcon Component

### Basic Usage
```jsx
<DecorationIcon icon="🍅" />
```

### Positioned Icon
```jsx
<DecorationIcon 
  icon="🥦" 
  position="top-0 right-0"
  size="large"
/>
```

### With Animation
```jsx
<DecorationIcon 
  icon="🧄" 
  position="bottom-4 left-4"
  size="medium"
  animate={true}
/>
```

### Without Animation
```jsx
<DecorationIcon 
  icon="🌶️" 
  position="top-8 left-8"
  size="small"
  animate={false}
/>
```

### Different Sizes
```jsx
<DecorationIcon icon="🍕" size="small" />
<DecorationIcon icon="🍔" size="medium" />
<DecorationIcon icon="🍰" size="large" />
```

### In a Relative Container
```jsx
<div className="relative w-full h-96">
  <DecorationIcon 
    icon="🍅" 
    position="top-0 left-0"
    animate={true}
  />
  <DecorationIcon 
    icon="🥦" 
    position="bottom-0 right-0"
    animate={true}
  />
  {/* Your content here */}
</div>
```

---

## RecipediaHeader Component

### Basic Usage
```jsx
<RecipediaHeader />
```

### In a Custom Layout
```jsx
<div className="min-h-screen bg-white">
  <RecipediaHeader />
  <main>
    {/* Your content */}
  </main>
</div>
```

---

## RecipediaHero Component

### Basic Usage (Full Hero Section)
```jsx
<RecipediaHero />
```

### In a Page Layout
```jsx
function LandingPage() {
  return (
    <div className="w-full">
      <RecipediaHero />
      
      {/* Additional sections */}
      <section className="py-20">
        <h2>More Content</h2>
      </section>
    </div>
  )
}
```

---

## Custom Combinations

### Hero Section with Custom Button
```jsx
import { HeroTextContent, Button } from './components/recipedia'

function CustomHero() {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-5xl font-bold mb-6">Custom Heading</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your custom description here
      </p>
      <Button 
        variant="primary" 
        size="large"
        onClick={() => window.location.href = '/recipes'}
      >
        Browse Recipes
      </Button>
    </div>
  )
}
```

### Testimonials Grid
```jsx
import { TestimonialCard } from './components/recipedia'

const testimonials = [
  { text: "Amazing!", user: "John", avatar: "/john.jpg", rating: 5 },
  { text: "Love it!", user: "Jane", avatar: "/jane.jpg", rating: 5 },
  { text: "Perfect!", user: "Mike", avatar: "/mike.jpg", rating: 5 },
]

function TestimonialsSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            userName={testimonial.user}
            userAvatar={testimonial.avatar}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  )
}
```

### CTA Section with Decorations
```jsx
import { Button, DecorationIcon } from './components/recipedia'

function CTASection() {
  return (
    <section className="relative bg-recipedia-light-gray py-24 overflow-hidden">
      <DecorationIcon icon="🍅" position="top-8 left-8" animate={true} />
      <DecorationIcon icon="🥦" position="bottom-8 right-8" animate={true} />
      
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Cooking?
        </h2>
        <p className="text-xl text-recipedia-gray mb-8">
          Join thousands of home chefs today
        </p>
        <Button variant="primary" size="large">
          Get Started Free
        </Button>
      </div>
    </section>
  )
}
```

### Button Group
```jsx
import { Button } from './components/recipedia'

function ButtonGroup() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" size="medium">
        Primary Action
      </Button>
      <Button variant="secondary" size="medium">
        Secondary Action
      </Button>
      <Button variant="ghost" size="medium">
        Cancel
      </Button>
    </div>
  )
}
```

---

## Advanced Usage

### Dynamic Testimonials from API
```jsx
import { useState, useEffect } from 'react'
import { TestimonialCard } from './components/recipedia'

function DynamicTestimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((item) => (
        <TestimonialCard
          key={item.id}
          text={item.text}
          userName={item.userName}
          userAvatar={item.userAvatar}
          rating={item.rating}
        />
      ))}
    </div>
  )
}
```

### Animated Icon Group
```jsx
import { DecorationIcon } from './components/recipedia'

const foodIcons = ['🍅', '🥦', '🧄', '🌶️', '🥕', '🍋']

function AnimatedBackground() {
  return (
    <div className="relative w-full h-96">
      {foodIcons.map((icon, index) => (
        <DecorationIcon
          key={index}
          icon={icon}
          position={`top-${index * 10}% left-${index * 15}%`}
          size="medium"
          animate={true}
          className="opacity-20"
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      ))}
    </div>
  )
}
```

### Responsive Button
```jsx
import { Button } from './components/recipedia'

function ResponsiveButton() {
  return (
    <Button 
      variant="primary"
      className="w-full md:w-auto"
    >
      Responsive Button
    </Button>
  )
}
```

---

## Props Reference

### Button Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `children` | node | required | - |
| `variant` | string | 'primary' | 'primary', 'secondary', 'ghost' |
| `size` | string | 'medium' | 'small', 'medium', 'large' |
| `onClick` | function | undefined | - |
| `className` | string | '' | - |

### TestimonialCard Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `text` | string | required | - |
| `userName` | string | required | - |
| `userAvatar` | string | required | - |
| `rating` | number | 5 | 0-5 |
| `className` | string | '' | - |

### DecorationIcon Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `icon` | string | required | Emoji or character |
| `position` | string | 'top-0 left-0' | Tailwind position classes |
| `size` | string | 'medium' | 'small', 'medium', 'large' |
| `animate` | boolean | true | true, false |
| `className` | string | '' | - |

---

## Tips

### Using with TypeScript
Add type definitions:
```typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  className?: string
}
```

### Styling Override
```jsx
// Tailwind utility classes
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Color
</Button>

// Or wrap in a div with custom styles
<div className="custom-button-wrapper">
  <Button>Wrapped Button</Button>
</div>
```

### Accessibility
All components include ARIA attributes and keyboard support:
```jsx
<Button aria-label="Explore our recipes">
  Explore
</Button>
```

---

## Common Patterns

### Hero with CTA
```jsx
<RecipediaHero />
```

### Feature Section
```jsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature cards */}
    </div>
    <div className="text-center mt-12">
      <Button variant="primary" size="large">
        Learn More
      </Button>
    </div>
  </div>
</section>
```

### Social Proof
```jsx
<section className="py-16 bg-recipedia-light-gray">
  <div className="container mx-auto px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      Loved by Thousands
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((item) => (
        <TestimonialCard key={item.id} {...item} />
      ))}
    </div>
  </div>
</section>
```

---

**Happy coding! 🎉**
