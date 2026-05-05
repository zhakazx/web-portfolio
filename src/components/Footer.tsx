export default function Footer() {
  return (
    <footer className="mt-16 lg:mt-20 pt-6 lg:pt-8 border-t border-border text-center">
      <p className="text-muted-foreground text-sm lg:text-base">
        © {new Date().getFullYear()} Zhaka Hidayat Yasir. All rights reserved.
      </p>
    </footer>
  )
}
