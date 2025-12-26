import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

const contactButtonVariants = cva(
    "group bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 inline-flex items-center overflow-hidden",
    {
        variants: {
            size: {
                default: "px-6 pl-8 py-4",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export type ContactButtonProps =
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof contactButtonVariants> & {
        label: string
        showArrow?: boolean
    }

export function ContactButton({
    href,
    label,
    className,
    showArrow = true,
    ...props
}: ContactButtonProps) {
    return (
        <a href={href} className="inline-block" {...props}>
            <button className={`${contactButtonVariants()} gap-0 group-hover:gap-2 group-hover:px-8 group-hover:pr-6 ${className || ""}`}>
                <span className="whitespace-nowrap pr-2">{label}</span>
                {showArrow && (
                    <ArrowUpRight
                        className="h-4 w-0 opacity-0 flex-shrink-0
                       group-hover:w-4 group-hover:opacity-100
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                       transition-all duration-200"
                    />
                )}
            </button>
        </a>
    )
}
