import classNames from 'classnames'

// based on: https://www.joshwcomeau.com/animation/3d-button/
export default function Button({
  backgroundColorClassName,
  colorClassName,
  displayClassName,
  widthClassName,
  className,
  onClick,
  href,
  type,
  disabled,
  children,
}: {
  backgroundColorClassName?: string
  colorClassName?: string
  displayClassName?: string
  widthClassName?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  children?: React.ReactNode
}) {
  const outerClassName = classNames(
    'group cursor-pointer rounded-lg border-none bg-cb-dark-blue text-center text-lg font-semibold',
    widthClassName ?? 'w-full',
    className
  )
  const innerClassName = classNames(
    'translate-y-[-4px] transform rounded-lg p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]',
    backgroundColorClassName ?? 'bg-brand-green',
    colorClassName ?? 'text-white',
    displayClassName ?? 'block'
  )
  if (href) {
    const anchorProps = {
      href,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
    return (
      <a className={outerClassName} {...anchorProps}>
        <span className={innerClassName}>{children}</span>
      </a>
    )
  }
  const buttonProps = {
    onClick,
    disabled: disabled ?? false,
    type: type ?? 'button',
  }
  return (
    <button className={outerClassName} {...buttonProps}>
      <span className={innerClassName}>{children}</span>
    </button>
  )
}
