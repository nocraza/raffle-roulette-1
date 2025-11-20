import { useState } from 'react'
import './App.css'
import { Wheel } from 'react-custom-roulette'
import Swal from 'sweetalert2'

// const data = [
//   // { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
//   // { option: '1', style: { backgroundColor: 'white' } },
//   { option: '0', },
//   { option: '1', },
//   { option: '2' },
// ]

const dataText =
  `Abelardo Guya Jr.
Abrielle Ardales
Aime Dela Cruz
Alessandra Dela Pierre
Alfonso Luis Santillan
Alvin Dela Cruz
Alvin Manzano
Andrea Ann Asperin
Andrea Felicia Toco
Angela Herrera
Angeles Cicat
Angelo Rodriguez
Ann Lachica
Anna Mae Mercado
Anthonette Alcoran
Antonne John Dabbay
Aquilino Adion Jr.
Ariel Azarcon
Aries John Catedrilla
Armand Famy Jr.
Arthur Doctolero
Avegail Doyo
Azyla Lyren Dagunan
Benedick Gregorio
Benjamin Tingson IV
Bernadette Alalong
Bianca Camille Dacoco
Bryll Joshua Resurreccion
Carl Patrick Bernardo
Carla Marie Baron
Carlo Bontia
Carlo Rosas
Carmela Dawn Reyes
Carmelo Adamos
Carolyn Perillo
Catherine Joy Balatbat
Cazelle Jazmyne Historillo
Charlene Severo
Charles Bermudez
Charmaine Caagoy
Cheska Rocel Saez
Chester Angelo Tupaz
Christian Benedict Jose
Christian Rhen Javier
Christopher Presto
Connie Flores
Crisselle Lou Manacob
Cristina Sumangid
Crystal Cloie Tingson
Cynthia Marie Daracan
Czarina Daffodil Valdez
Daniel Cornelius De Guzman
Danill Panelo
Darla Casas
Darren Layawen
Dexter Ax Uyvico
Dexter Brian Adrales
Dianne Palomo
Donnavie Legarte
Donniel Collera
Dresdain Balangue
Edgar Micael Jr.
Edna Diaz
Edward Atienza
Elaine Jamore-Bustamante
Elien Ignacio
Eliza Gallano
Emilson Duque
Eric Bayan
Felix Poblete II
Ferdi Alfonso Baarde
Ferleene Balazuela
Fernan Laungayan
Gemma Balanquit-Benedicto
Gernie Sacramento
Gilbert Sarte
Grace Ocbina
Hacel Joy Caro
Homer Esguerra
Hower Zapanta
Ian Gabriel Antinero
Jahmai Benabise
Jan Carlo Cachapero
Jana Ayessa Camello
Janelle Marie Garcia
Janna Krister Umale
Jasmine Abucayon
Jayne Marie Japay
Jayvie Barbas
Jean Monica Catantan
Jennifer Endoma
Jessica Trillana
Jezer Dionisio
Jhon Christopher Baptista
Jhon Nero Garsin
Joebel Bajo
Joemar Bathan
Joenee Relato
Joevena Ortega
John Francis Briones
John Michael Bucad
John Michael Ermo
John Paul Alcomendas
John Paul Carino
Jomel Estrada
Jonathan Mia
Joven Sibua
Juan Paolo Noel Malabanan
Jubbele Sabas
Juella Suzzane Nuevo
Julia Ana Mercene
Julianne Patricia Mejico
Jun Del Alayon
Karizza Mei Dela Cruz
Kassandra Angela Lacay
Kate Justine Casals
Katherine Joy Patron
Kaye Angeline Pagunsan
Kelyn Joy Tapel
Kevin Neri
Kezeiah Delfin
Kimberly Casumpang
Krisha Gordonas
Krishia Uy
Kristelle Kiey Ollagangi
Lally Canonizado
Leah Marie Salazar
Leane Delfin
Lessette Jimenez
Lionel Aguilar
Liza Talana
Lizette Tungol
Lorenz Quebral
Luciel Hannah Amer
Lyza Jerell Talana
Ma. Alecsandra Ygot
Ma. Anthonette Marcelo
Maegan Maltu
Manilyn Nolo
Marc Lysander Marcelo
Maria Christiana de Guzman
Maria Christina Sapalo
Maria Veronica Umandal
Maricris Ablay
Maricris Cagampang
Marie Isabel Bobier
Mariefe Vergie Basco
Marjomil Diez
Mark Francisco Africa
Marlon Matthew Almeria
Marnie Louise Angela Sabareza
Marshane Catacata
Martha Allen Juanillo
Mary Angeline Palarca
Mary Anne Landrito
Mary Joy Balajadia
Mary Joyce Lim
Mary Thel Castillo
Maureen Sibug
Mechelle Buenaventura
Melannie Espiritu
Melody Asunan
Meredeth Therese Velasco
Merlinda Derecho
Michael Edwin Dela Cruz
Michel Angelu Caballero
Michelle Robles
Mitchie Narvasa
Moses Baswel
Myla Luna
Myla Ruby Pontipedra
Myriel Joy Era
Nathaniel Fuentes
Nellyn Recto
Nestor Verbo Jr.
Nicole Martie Barredo
Nina Ariane Escamillan
Noel Banta
Olive Grace Dimacali
Paida Munjalal
Paola Mae De Guzman
Patricia Jonna Torres
Paul John Beldad
Paulo Consolacion
Phil Andrew Talavera
Phillip Michael Sengco
Rachel Navarro
Ralph Brandon Oplimo
Randy Timoteo
Raphael Christian Tabios
Rashdell Ambulong
Rebecca Rodriguez
Regina Mei Castillo
Regina Nomorosa
Rene Orendain Jr.
Rex Kenneth Miranda
Reynaldo Bartolome Jr.
Rhea Rose Lalatag
Riana Angela Raydanas
Riann Guerrero
Richard Lalamunan
Richard Recato
Rizza Angela Babiera
Rochelle Artangga
Roda Batayola
Ronald Catanjal
Ronald Day-yo
Rother Brozula
Sheena Victoria Cada
Sheila Marie Gabito
Shiela Cuenca
Shiela May Castillo
Sunshine Sanchez
Tana Isabelle Paderes
Tonimar Mel De Sena
Valerie Eseo
Vanessa Leonen
Ven Samuel Palma
Venice Marie Alvarez
Vernadet Parreno
Victor Joseph Reyes
Vincent Emmar Perin
Wilbert Nemenio
Winda Malingin
Ysabel Cerissa Tiongson
Yvan Zyrille Gomez
`

localStorage.setItem('roulette-list', dataText)

function App() {
  // const [count, setCount] = useState(0)
  const [startSpin, setStartSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [winners, setWinners] = useState('')
  const [listText, setListText] = useState(localStorage.getItem('roulette-list'))

  const aa = listText.split(/\r?\n/).filter(item => item.trim() !== '').map(item => ({ option: item }))

  const startSpinHandler = () => {
    const newPrizeNumber = Math.floor(Math.random() * aa.length)
    setPrizeNumber(newPrizeNumber)
    setStartSpin(true)
  }

  const onStopSpinning = () => {
    setStartSpin(false)

    Swal.fire({
      title: "You Won!",
      text: `${aa[prizeNumber].option}`,
      icon: "success"
    });
    setWinners(prev => aa[prizeNumber].option + (prev ? '\n' : '') + prev)
    setListText(prev => {
      const listArr = prev.split(/\r?\n/).filter(item => item.trim() !== '')
      listArr.splice(prizeNumber, 1)
      const newList = listArr.join('\n')
      localStorage.setItem('roulette-list', newList)
      return newList
    })
  }

  const onHandleListChange = (e) => {
    const value = e.target.value
    setListText(value)
    localStorage.setItem('roulette-list', value)
  }

  return (
    <>
      <div className="container">
        <div>
          <Wheel
            mustStartSpinning={startSpin}
            prizeNumber={prizeNumber}
            data={aa}
            // backgroundColors={['#0000ff']}
            // backgroundColors={['#df3428']}
            textColors={['#ffffff']}
            onStopSpinning={onStopSpinning}
            fontSize={6}
            outerBorderWidth={1}
            radiusLineColor='blue'
            style={{ maxWidth: '700px', maxHeight: '700px' }}

          />
          <button style={{ border: `1px solid black` }} type="button" onClick={startSpinHandler}>Spin</button>
        </div>
        <div>
          <span>LIST</span>
          <br />
          <textarea name="" id="list-area" value={listText} onChange={onHandleListChange}></textarea>
        </div>
        <div>
          <span>Winners</span>
          <br />
          <textarea name="" id="list-area" value={winners} onChange={e => setWinners(e.target.value)}></textarea>
        </div>
      </div>
    </>
  )
}

export default App