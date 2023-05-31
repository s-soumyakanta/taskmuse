import { screen, render } from "@testing-library/react";
import Navbar from "../Navbar";
import user from "@testing-library/user-event"

describe("Navbar rendering svg icons correctly", () => {
  test("SVG icons rendering correctly", () => {
    render(<Navbar />);

    const svgIconNames:string[] = ["menu", "taskzen", "search", "view", "sort", "about", "download"];

    svgIconNames.forEach((iconName:string) => {
      const icon:HTMLElement = screen.getByAltText(iconName);
      expect(icon).toBeInTheDocument();
    });
  });

  test("Navbar Menu clicked",async ()=>{
    user.setup()
    const handleMenu = jest.fn()
    
    render(<Navbar handleMenuClick={handleMenu} />)
    const menu = screen.getByAltText("menu")
    await user.click(menu)
    expect(handleMenu).toHaveBeenCalledTimes(1) 
})
});









// test("SVG icons rendering correctly",()=>{
//     render(<Navbar />)

//     const menu = screen.getByAltText("menu")
//     expect(menu).toBeInTheDocument()

//     const logo = screen.getByAltText("taskzen")
//     expect(logo).toBeInTheDocument()

//     const search = screen.getByAltText("search")
//     expect(search).toBeInTheDocument()

//     const view = screen.getByAltText("view")
//     expect(view).toBeInTheDocument()

//     const sort = screen.getByAltText("sort")
//     expect(sort).toBeInTheDocument()

//     const about = screen.getByAltText("about")
//     expect(about).toBeInTheDocument()

//     const download = screen.getByAltText("download")
//     expect(download).toBeInTheDocument()

// })