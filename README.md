# UI Goal

The user navigate the page by clicking the hamburger located in the top right corner which will display locations. The hamburger is is always visible

## Inspired by

[Globe Town](http://globetown.io/training/) showcases a nav bar with the following features;
1. Company name on top left
2. Hamburger menu on top right
3. Color of name/hamburger is black.
4. Nav bar is initially transparent.
5. On click, nav bar fades to full opacity with black background, and company name/links are white.
6. Hamburger fades to cross.


## Tasks

1. Explore Globe Town code, figure out functionality
2. Implement html structure
3. Implement CSS structure (use BEM)
4. Implement JS


## CSS Structure (Globe Town)

nav 
    width 100%
    height = 20vh
    min-height 44px
    padding 0 45px
    position fixed, z-index 10
    transition background-color 500ms ease-out .1s
    top 0
    
nav settings ul 
    display flex
    space between
    align items center

li liststyle-none


    
    
    


### Classes

opcity-0 (sets background to rgba(0,0,0,0))

nav - display is flex (align items center, justify content space between)

logo - font-size 35px, black color, 500ms transition
    h2 - font family = alternate gothic
    
links container - display flex space-between, align items center

hide = opacity 0, z index -5

toggle container 
    width: 36px
    margin-left 0
    margin-right 15px
    
buttontoggle 
    position relative
    width 70px
    height 38px
    text indent trick
    box-shadow none
    border none
    cursor pointer
    transition background 0.1
    
span(menu)
    display block
    position absolute
    background color black
    




## HTML Structure (Globe Town)

nav, class = 'nav opacity-0'
    div, class = 'logo'
        h2 class= 'globetown logo'
            a href = '/' globetown
    div, class = 'links container'
        div, class = 'nav-settings-dropdown hide'
            ul
                li
                    h2
                        a onclick='function'
                li
                    h2
                        span content= '/'
                li
                    h2
                        a onclick='function'
        a toggle = 'dropdown' class= 'toggle-container'
            button id='toggle switch' class='icon cmn-toggle-switch cmn-toggle-switch'
                span:before (line)
                span(line)
                span:after (line) 