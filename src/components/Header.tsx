import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  li {
    padding: 16px;
    a {
      text-decoration: none;
    }
  }
`;

const Header: React.FC = () => (
  <header>
    <nav>
      <NavList>
        <li>
          <Link to='/development'>Development</Link>
        </li>
        <li>
          <Link to='/visualization'>Data Visualization</Link>
        </li>
        <li>
          <Link to='/personal'>Personal</Link>
        </li>
      </NavList>
    </nav>
  </header>
);

export default Header;
