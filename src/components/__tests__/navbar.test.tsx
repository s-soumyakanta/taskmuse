import { screen,render } from "@testing-library/react";
import Navbar from "../Navbar";


describe("Navbar rendering svg icons correctly",()=>{
    test("SVG icons rendering correctly",()=>{
        render(<Navbar />)

        const menu = screen.getByAltText("menu")
        expect(menu).toBeInTheDocument()

        const logo = screen.getByAltText("taskzen")
        expect(logo).toBeInTheDocument()

        const search = screen.getByAltText("search")
        expect(search).toBeInTheDocument()

        const view = screen.getByAltText("view")
        expect(view).toBeInTheDocument()

        const sort = screen.getByAltText("sort")
        expect(sort).toBeInTheDocument()

        const about = screen.getByAltText("about")
        expect(about).toBeInTheDocument()

        const download = screen.getByAltText("download")
        expect(download).toBeInTheDocument()

    })
})