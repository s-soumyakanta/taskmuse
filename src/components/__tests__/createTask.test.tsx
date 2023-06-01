import { render,screen } from "@testing-library/react";
import CreateTask from "../CreateTask";

describe("CreateTask redners correctly",()=>{
    test("CreateTask svgs renders correctly",()=>{
        render(<CreateTask />)

        const createTask:string[] =[
            "Add Photographs to task",
            "Add background color to task",
            "Scheduule task",
            "Repeat task",
            "Add reminder for task",
            "Copy task text to clipboard",
            "More options"
        ]

        createTask.forEach((elems:string )=> {
            const elem:HTMLElement = screen.getByAltText(elems)
            expect(elem).toBeInTheDocument()
            
        });

    })
    

    test("CreateTask buttons renders correctly",()=>{
        render(<CreateTask />)

        const discardButton = screen.getByRole("button",{name:/discard/i})
        expect(discardButton).toBeInTheDocument()

        const saveButton = screen.getByRole("button",{name:/save/i})
        expect(saveButton).toBeInTheDocument()
    })

    test("CreateTask textara renders correctly",()=>{
        render(<CreateTask />)
        const textarea = screen.getByPlaceholderText("Create a task...")
        expect(textarea).toBeInTheDocument()
    })
   
})