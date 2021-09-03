import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>Series</span>
                </a>

            </NavMenu>

            <UserImg src="/images/profile.jpeg"/>


        </Nav>
    )
}

export default Header

//CSS3 Starts From here

const Nav = styled.nav`
    // this height affects the hight of the Nav Bar
    height: 70px;
    
    //this background color only affects the top Navigation Bar
    background: #090b13;
    
    //this section makes edits to the Disny Logo 
    //changing anything from the code below will make changes to the logo
    display: flex;
    align-items: center;
    padding: 0 36px; // 0 means top and bottom and 36 means left and right padding
    overflow: hidden;

`

//this code is to style the Disney logo
const Logo = styled.img`
    width: 80px;
`

//this code is for the entire Nav Menu containing Home etc
const NavMenu = styled.div`
    display: flex;
    flex: 1; //when adding this the nax menu stays in place and only the profile img moves to the right
    margin-left: 25px;
    align-items: center;
    //this a tag targets all the a tags with img
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer; // this code makes all the link turn into a hand icon showing it is clickable
        
        //this is targeting all the img
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            //this code will under line the highlight of any links
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;

                //this code will make the ___ sign highlight only when we hover the mouse over the linked items
                opacity: 0;
                transform-origin: left center;
                
                //this code makes the transition of the underline happen you hover over the linied item
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                

            }
        }
        //this code activates the hover feature so when you hover over the linked item it will highlight it
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
        
    }
`
// this code is for the user profile image changing anything here will affect only the user profile image
const UserImg = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer; //to make it feel like a button

`