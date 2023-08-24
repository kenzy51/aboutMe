import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import Link from 'next/link'
import useMediaQuery from '@/shared/hooks/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { x: '-100%' },
};

const navbarItems = [
  {
    id: 1,
    name: 'About',
  },
  {
    id: 8,
    name: 'Portfolio',
    
  },
  {
    id: 2,
    name: 'Services',
  },
]

const Header = () => {
  const lg = useMediaQuery('lg');
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const shouldShowHeader = scrollTop > 0
      setIsScrolled(shouldShowHeader)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <Wrapper isScrolled={isScrolled}>
      <Container>
        <HeaderContent>
          {lg && (
            <BurgerMenu onClick={toggleMenu} isMenuVisible={isMenuVisible}>
              <span />
            </BurgerMenu>
          )}
          <IconAndCity>
            <IconLink href="/">
            </IconLink>
            <CityLink>
              <Link href="/">
                <CityBlock>
                  <SelectWrapper>
                    <ArrowIcon>
                    </ArrowIcon>
                  </SelectWrapper>
                </CityBlock>
              </Link>
            </CityLink>
          </IconAndCity>
          <HeaderMenu>
            {navbarItems.map((item) =>
              item.items ? (
                  <LinkItem key={
                    item.id
                  }>{item.name}</LinkItem>
              ) : (
                <Link href="/" key={item.id}>
                  <LinkItem>{item.name}</LinkItem>
                </Link>
              )
            )}
          </HeaderMenu>
          <AnimatePresence>
            {lg && (
              <MobileMenu animate={isMenuVisible ? 'open' : 'closed'} variants={variants}>
                <MobileMenuList>
                  {navbarItems.map((item) => (
                    <Link href="/" key={item.id}>
                      <MobileMenuItem>{item.name}</MobileMenuItem>
                    </Link>
                  ))}
                </MobileMenuList>
              </MobileMenu>
            )}
          </AnimatePresence>
        </HeaderContent>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  width:100%;
  z-index: 2;
  background:#DDE1E5;
  padding:15px 0;
  transition: transform 0.3s ease-in-out;
  font-family: 'JetBrains Mono', monospace;
  ${theme.mqMax('lg')} {
    height:80px;
    padding:12px 0;
  }
`
const Container = styled.div`
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  z-index: 100;
  ${theme.mqMax('xl')} {
    padding: 0 25px;
  }
`
const IconLink = styled(Link)`
  display: flex;
  justify-content: center;
  z-index:99999;
  
  font-family: 'JetBrains Mono', monospace; /* Apply JetBrains Mono font to the .main class */
  color:white;
  ${theme.mqMax('lg')} {
    width: 100%;
    transform: scale(0.95);
    /* margin-left: 51.5px; */
  }
  ${theme.mqMax('sm')} {
    /* margin-left: 20px; */
  }
`
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Plus Jakarta Sans', sans-serif;

  ${theme.mqMax('lg')} {
    display: flex;
  }
`
const IconAndCity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  ${theme.mqMax('md')} {
    flex-basis: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`
const CityLink = styled.div`
  flex-grow: 1;
`
const CityBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  margin-left: 29px;
  ${theme.mqMax('md')} {
    justify-content: center;
  }
  ${theme.mqMax('lg')} {
    display: none;
  }
`
const ArrowIcon = styled.div`
  position: absolute;
  left: 79.17%;
  bottom: 20.17%;
`
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  color:red;
  gap: 20px;
  margin: 0 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;

  /* 1200 */
  ${theme.mqMax('xl')} {
    gap: 10px;
  }
  /* 992 */
  ${theme.mqMax('lg')} {
    display: none;
  }
`
const LinkItem = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: ${theme.colors.dark};
  white-space: nowrap;
  padding: 10px;
  /* 1200 */
  ${theme.mqMax('xl')} {
    font-size: 14px;
  }
`
const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const SelectorLanguage = styled.div`
  width: 77px;
  display: flex;
  padding: 12px 0;
  margin-left: 40px;
  /* 1200 */
  ${theme.mqMax('xl')} {
    margin-left: 20px;
  }
  /* 768 */
  ${theme.mqMax('md')} {
  }
`
const OptionSelector = styled.select`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: inherit;
  /* 1200 */
  ${theme.mqMax('xl')} {
    font-size: 14px;
  }
`
const BurgerMenu = styled.div`
  position: relative;
  cursor: pointer;
  height: 16px;
  min-width: 23px;
  display: flex;
  align-items: center;
  span {
    display: ${(p) => (p.isMenuVisible ? 'none' : 'block')};
    height: 2px;
    width: 100%;
    background-color: ${theme.colors.white};
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 23px;
    height: 2px;
    background-color: ${theme.colors.white};
    transition: transform 0.2s ease;
  }
  &:before {
    transform: ${(p) => (p.isMenuVisible ? 'rotate(45deg)' : 'rotate(0)')};
    top: 0;
  }
  &:after {
    transform: ${(p) => (p.isMenuVisible ? 'rotate(-45deg)' : 'rotate(0)')};
    bottom: ${(p) => (!p.isMenuVisible ? 0 : 'initial')};
    top: ${(p) => (p.isMenuVisible ? 0 : 'initial')};
  }
`

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100VH;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`
const MobileMenuList = styled.ul`
  margin-top: 20px;
`
const MobileMenuItem = styled(LinkItem)`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${theme.colors.dark};
`

export default Header
