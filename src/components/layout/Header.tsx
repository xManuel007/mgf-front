const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0
        w-full h-14
        bg-blue-100
        flex items-center justify-between
        px-4
        border-b
        z-50
      "
    >
      {/* Logo / Marca */}
      <div className="text-lg font-bold tracking-wide">
        MGF
      </div>

      {/* Acciones (placeholder) */}
      <div className="flex items-center gap-3 text-sm">
        {/* Aquí luego puedes meter iconos */}
      </div>
    </header>
  )
}

export default Header
