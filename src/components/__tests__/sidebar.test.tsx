import { render,screen } from "@testing-library/react";
import Sidebar from "../Sidebar";

describe("Sidebar redners correctly",()=>{
    test("Sidebar svgs renders correctly",()=>{
        render(<Sidebar />)

        const sidebarElems:string[] = ["task","important","reminder","archive","trash"]

        sidebarElems.forEach((elems:string )=> {
            const elem:HTMLElement = screen.getByAltText(elems)
            expect(elem).toBeInTheDocument()
            
        });
    })
    
   
})