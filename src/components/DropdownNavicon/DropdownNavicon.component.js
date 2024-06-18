import React from 'react'
import { StyledDropdownNavicon } from './DropedownNavicon.styled'
import ProfileIcon from '@mui/icons-material/PersonOutline';
export default function DropdownNavicon() {
    return (
        <StyledDropdownNavicon>
                    <ProfileIcon />
                    <span className="nav-dropdown">
                        <div className="nav-dropdown-list-cont">
                           <ProfileIcon />
                            <span>My Page</span>
                        </div>
                        <div className="nav-dropdown-list-cont"> 
                        <ProfileIcon />
                            <span>Feedback</span>
                        </div>
                        <div className="nav-dropdown-list-cont">
                        <ProfileIcon />
                            <span>Performance</span>
                        </div>
                        <div className="nav-dropdown-divider"></div>
                        <div className="nav-dropdown-list-cont">
                        <ProfileIcon />
                            <span>Setting</span>
                        </div>
                        <div className="nav-dropdown-list-cont">
                        <ProfileIcon />
                            <span>Logout</span>
                        </div>
                    </span>
        </StyledDropdownNavicon>
    )
}
