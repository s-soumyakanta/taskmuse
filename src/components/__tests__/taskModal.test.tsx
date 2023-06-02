import {screen, render} from "@testing-library/react"
import TaskModal from "../TaskModal"

describe("TaskModal renders correctly",()=>{
    test("All buttons renders correctly",()=>{
        render(<TaskModal />)

        const deleteBtn = screen.getByRole("button",{name:/delete/i})
        expect(deleteBtn).toBeInTheDocument()

        const completedBtn = screen.getByRole("button",{name:/completed/i})
        expect(completedBtn).toBeInTheDocument()

        const closeBtn = screen.getByAltText("close")
        expect(closeBtn).toBeInTheDocument()
    })
})