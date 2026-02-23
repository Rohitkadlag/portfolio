function ContactItem({ label, value, href }) {
  const content = (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-3 sm:py-4 border-b border-white/10 last:border-0">
      <span className="text-sm sm:text-base text-gray-400 mb-1 md:mb-0">{label}</span>
      <span className="text-base sm:text-lg font-medium break-all">{value}</span>
    </div>
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:text-gradient transition-all duration-300"
    >
      {content}
    </a>
  ) : (
    content
  )
}

export default ContactItem
