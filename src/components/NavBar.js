import React from 'react'
import { NavBar, NavBarBrand, Nav, NavItem, NavLink, NavBarText} from 'reactstrap'

export default function NavBar() {
    return (
        <div>
            <NavBar expand='md'>
                <NavBarBrand href='/'>BRAND HERE</NavBarBrand>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href=''></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=''></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=''></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=''></NavLink>
                        </NavItem>
                    </Nav>
            </NavBar>
        </div>
    )
}
