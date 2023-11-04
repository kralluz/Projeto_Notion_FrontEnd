import { OpenAndClose } from "../OpenAndClose/styles";
import { SideBarItem } from "../../assets/sidebarItem";
import { SideBarContainer } from "./styles";
import { IoMdAddCircle } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useState } from 'react'
export const SideBar = () => {

    const [isOpen, setIsOpen ] = useState(true)
    function switchOpenOrClose(){
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    return(
       <>
            <SideBarContainer isOpen={isOpen}>
                <OpenAndClose onClick={switchOpenOrClose}>
                    <img src="src\assets\notion.ico" alt="notion icon" />
                    {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight /> }
                </OpenAndClose>
                <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
                <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
            </SideBarContainer>
       </>
    )
};