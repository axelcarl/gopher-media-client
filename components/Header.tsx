import Dropdown from "./Dropdown";

export default function Header() {

    return (
        <header>
            <div className="grid grid-cols-[1fr_auto_1fr] py-2 px-4 shadow overflow-visible">
                <div></div>
                <div className="text-center p-4 text-2xl group bg-gradient-to-r from-black to-indigo-500 bg-clip-text text-transparent">
                    GOPHER MEDIA
                </div>
                <div className="ml-auto my-auto px-2">
                    <Dropdown />
                </div>
            </div>
        </header>
    )
}
