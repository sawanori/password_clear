import React from 'react'
import {HeaderWrapper} from './styles'
import {Link} from 'gatsby'
import {Cart} from '../Cart'
import {Logo} from '../Logo'
import {Search} from '../Search'
export function Header(){
  return (
  <HeaderWrapper>
    <div>
      <Link to="/">
        <Logo/>
      </Link>
    </div>
    <Search/>
    <Cart/>
    </HeaderWrapper>
    )
}