import { themeDropdown, cityDropdown, languageDropdown } from '../DropItems'

import './Dropdown.css'

export default function Dropdown({ type }) {
  const ThemeDropdown = () => (
    <select className='services-submenu' multiple>
      {themeDropdown.map(i => {
        return (
          <option key={i.id} value={i.id} className={i.cName}>
            {i.title}
          </option>
        )
      })}
    </select>
  )

  const CityDropdown = () => (
    <select className='services-submenu' multiple>
      {cityDropdown.map(i => {
        return (
          <option key={i.id} value={i.id} className={i.cName}>
            {i.title}
          </option>
        )
      })}
    </select>
  )

  const LanguageDropdown = () => (
    <select className='services-submenu' multiple>
      {languageDropdown.map(i => {
        return (
          <option to={i.path} className={i.cName} key={i.id}>
            {i.title}
          </option>
        )
      })}
    </select>
  )

  if (type === 'theme') return <ThemeDropdown />
  if (type === 'city') return <CityDropdown />
  if (type === 'language') return <LanguageDropdown />
}
