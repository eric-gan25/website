import Link from "next/link"

type NavLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  showHover?: boolean
}

export function NavLink({ href, children, className = "", showHover = true }: NavLinkProps) {
  const baseClasses = "text-md text-black"
  const hoverClasses = showHover ? "hover:opacity-70" : ""
  const classes = `${baseClasses} ${hoverClasses} ${className}`.trim()

  const isAnchor = href.startsWith("#")

  if (isAnchor) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

