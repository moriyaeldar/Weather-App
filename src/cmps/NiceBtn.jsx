
export function NiceBtn({ children, Icon, isLoading, ...restOfProps }) {
  return (
    <button className="flex align-center cta-btn" {...restOfProps}>
      {isLoading ? 'Loading' :
        <>
          {children}
        </>}
    </button>
  )
}
