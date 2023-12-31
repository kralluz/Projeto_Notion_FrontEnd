import styled from 'styled-components';
import '../../styles/global.css';

interface SideBar {
    isopensidebarvalue: boolean
}

export const SideBarComponent = styled.div<SideBar>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    min-width: ${props => props.isopensidebarvalue ? '220px' : '0px'};
    width: fit-content;
    height: 100vh;
    background-color: var(--gray-5);
    transition: .5s ;
    
`;

export const SideBarContainer = styled.div<SideBar>`
    position: ${props => props.isopensidebarvalue ? 'absolute' : 'absolute'};
    top: ${props => props.isopensidebarvalue ? '0%' : '50%'};
    left: ${props => props.isopensidebarvalue ? '0' : '-170px'};
    transform: ${props => props.isopensidebarvalue ? 'translateY(0%)' : 'translateY(-50%)'};
    min-width: 220px;
    width: fit-content;
    background-color: var(--gray-5);    
    border-radius: 0 5px 5px 0;
    transition: .6s;
    &:hover{
        left: 0;
    }
`

