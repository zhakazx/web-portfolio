export default function Separator() {
    return (
        <div
            className="bg-red my-8 grid h-24 place-items-center"
            style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)' }}
        >
            <div
              className="h-full border-r-[1.5px] border-dashed border-r-black/50"
            ></div>
        </div>
    )
}