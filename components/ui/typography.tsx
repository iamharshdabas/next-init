import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const typographyVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    balance: {
      true: "text-balance",
    },
    center: {
      true: "text-center",
    },
    fontWeight: {
      lg: "font-extrabold",
      md: "font-semibold",
      sm: "font-medium",
    },
    leading: {
      base: "leading-7",
      none: "leading-none",
    },
    muted: {
      true: "text-muted-foreground",
    },
    scroll: {
      true: "scroll-m-16",
    },
    size: {
      lg: "text-lg lg:text-xl",
      md: "text-base lg:text-lg",
      sm: "text-sm lg:text-base",
      xl: "text-xl lg:text-2xl",
      xxl: "text-2xl lg:text-4xl",
      xxxl: "text-3xl lg:text-6xl",
      xxxxl: "text-4xl lg:text-8xl",
    },
    tracking: {
      true: "tracking-tight",
    },
    variant: {
      ghost: "bg-gradient-to-b from-foreground to-background bg-clip-text text-transparent",
      link: "underline-offset-4 hover:underline",
    },
  },
})

function H1({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"h1"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "h1"
  return (
    <Comp
      className={cn(
        typographyVariants({
          balance: true,
          center: true,
          className,
          fontWeight: "lg",
          scroll: true,
          size: "xxxxl",
          tracking: true,
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function H2({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"h2"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "h2"
  return (
    <Comp
      className={cn(
        "first:mt-0",
        typographyVariants({
          className,
          fontWeight: "md",
          scroll: true,
          size: "xxxl",
          tracking: true,
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function H3({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"h3"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "h3"
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          fontWeight: "md",
          scroll: true,
          size: "xxl",
          tracking: true,
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function H4({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"h4"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "h4"
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          fontWeight: "md",
          scroll: true,
          size: "xl",
          tracking: true,
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function P({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"p"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "p"
  return (
    <Comp
      className={cn(
        '[&:not(:first-child)]:mt-6"',
        typographyVariants({
          className,
          leading: "base",
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function Lead({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"p"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "p"
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          muted: true,
          size: "xl",
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function Large({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          fontWeight: "md",
          size: "lg",
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function Small({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"small"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "small"
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          fontWeight: "sm",
          leading: "none",
          size: "sm",
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function Muted({
  asChild,
  children,
  className,
  ...props
}: ComponentProps<"p"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "p"
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          muted: true,
          size: "sm",
        }),
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export {
  H1 as TypographyH1,
  H2 as TypographyH2,
  H3 as TypographyH3,
  H4 as TypographyH4,
  P as TypographyP,
  Lead as TypographyLead,
  Large as TypographyLarge,
  Small as TypographySmall,
  Muted as TypographyMuted,
  typographyVariants,
}
