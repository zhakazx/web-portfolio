export default function Separator() {
  return (
    <div
      className="my-8 grid h-24 place-items-center"
      style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)' }}
      aria-hidden="true"
    >
      <div className="h-full border-r-[1.5px] border-dashed border-r-foreground/50" />
    </div>
  )
}
