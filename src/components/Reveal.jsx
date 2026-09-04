import { useInView } from "../hooks/useInView";

/**
 * Fades and lifts its children into place the first time they scroll in.
 * `delay` staggers siblings; `as` keeps the DOM semantic.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      data-shown={inView}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
