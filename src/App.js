import React from 'react';
import { useState } from 'react';
import './App.css';
import logo from './images/logo.png'
import {BsSearch} from 'react-icons/bs'
import {CiLight} from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import profile  from './images/profile-1.jpg'
import {MdDashboard} from 'react-icons/md'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {MdAccountBalanceWallet} from 'react-icons/md'
import {GrTransaction} from 'react-icons/gr'
import {RiPieChartFill} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import {MdHelpCenter} from 'react-icons/md'
import {RiSettings3Fill} from 'react-icons/ri'
import cardchip from './images/card chip.png'
import BTC from './images/BTC.png'
import ETH from './images/ETH.png'
import EURO from './images/EURO.png'
import mastercard from './images/master card.png'
import visa from './images/visa.png'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import mcdonalds from './images/mcdonalds.png'
import monster from './images/monster.png'
import tesla from './images/tesla.png'
import uniliver from './images/uniliver.png'
import {ImHeadphones} from 'react-icons/im'
import {GiShoppingBag} from 'react-icons/gi'
import {FaUtensils} from 'react-icons/fa'
import {GiConsoleController} from 'react-icons/gi'
import {MdLocalPharmacy} from 'react-icons/md'
import {IoMdFitness} from 'react-icons/io'


function App() {
//   const ctx = document.querySelector('#chart').getContext('2d');
//   new chart(ctx, {
//     type: 'bar',
   
// });
  const [card, setcard] = useState([
    {
      id: 1,
      logo: BTC,
      nameoflogo: 'BTC',
      visa: visa,
      amount: '$827,119',
    },
    {
      id: 2,
      logo: ETH,
      nameoflogo: 'ETH',
      visa: visa,
      amount: '$95,645',
    },
    {
      id: 3,
      logo: EURO,
      nameoflogo: 'EUR',
      visa: mastercard,
      amount: '$79,017',
    },
  ])

  const [report, setreport]= useState([
    {
      id: 1,
      title: 'Income',
      amount: '$29,023',
      percent: '+3.14%'
    },
    {
      id: 2,
      title: 'Expenses',
      amount: '$9,005',
      percent: '-5.70%'
    },
    {
      id: 3,
      title: 'Cashback',
      amount: '$4,700',
      percent: '+3.1%'
    },
    {
      id: 4,
      title: 'Turnover',
      amount: '$118,900',
      percent: '-17.14%'
    },
  ])

  const [payment, setpayment] =useState([
    {
      id:1,
      title: 'Training',
      amount: '$50'
    },
    {
      id:2,
      title: 'Internet',
      amount: '$40'
    },
    {
      id:3,
      title: 'Gas',
      amount: '$180'
    },
    {
      id:4,
      title: 'Cinema',
      amount: '$65'
    },
    {
      id:5,
      title: 'Education',
      amount: '$999'
    },
    {
      id:6,
      title: 'Electricity',
      amount: '$109'
    },
    {
      id:7,
      title: 'Food',
      amount: '$220'
    },
  ])

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'BTC',
      data: [29375, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
      borderColor: "red",
      borderWidth: 2,
      backgroundColor: "red"
    },
    {
      label: 'ETH',
      data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
      borderColor: "Blue",
      borderWidth: 2,
      backgroundColor: "blue"
    }
  ]
  }

  const [inv, setinv] =useState([
    {
      id: 1,
      logo: uniliver,
      name: "Unilever",
      date: "7 Nov, 2022",
      time: "9:14 pm",
      number: "1402",
      amount: "$20,033",
      percent: '-4.27%'
    },
    {
      id: 2,
      logo: tesla,
      name: "Tesla",
      date: "1 Dec, 2022",
      time: "8:54 pm",
      number: "5277",
      amount: "$720,110",
      percent: '+28.27%'
    },
    {
      id: 3,
      logo: monster,
      name: "Monster",
      date: "1 Dec, 2022",
      time: "4:03 pm",
      number: "700",
      amount: "$13,110",
      percent: '+7.27%'
    },
    {
      id: 4,
      logo: mcdonalds,
      name: "McDonalds",
      date: "3 Dec, 2022",
      time: "6:14 pm",
      number: "5200",
      amount: "$78,030",
      percent: '-0.2%'
    },
  ])

  const [transactions, settransactions] = useState([
    {
      id: 1,
      logo: <ImHeadphones />,
      name: "Music",
      date: "20.10.2022",
      visa: visa,
      number: "*2757",
      cardtype: "Credit Card",
      amount: "-$20",
    },
    {
      id: 2,
      logo: <GiShoppingBag/>,
      name: "Shopping",
      date: "21.10.2022",
      visa: visa,
      number: "*1920",
      cardtype: "Credit Card",
      amount: "-$799",
    },
    {
      id: 3,
      logo: <FaUtensils />,
      name: "Restaurant",
      date: "19.10.2022",
      visa: mastercard,
      number: "8273",
      cardtype: "Master Card",
      amount: "-$50",
    },
    {
      id: 4,
      logo: <GiConsoleController />,
      name: "Games",
      date: "15.10.2022",
      visa: visa,
      number: "*2757",
      cardtype: "Credit Card",
      amount: "-$44",
    },
    {
      id: 5,
      logo: <MdLocalPharmacy />,
      name: "Pharmacy",
      date: "19.10.2022",
      visa: visa,
      number: "1920",
      cardtype: "Credit Card",
      amount: "-$30",
    },
    {
      id: 6,
      logo: <IoMdFitness />,
      name: "Fitness",
      date: "15.10.2022",
      visa: mastercard,
      number: "*8273",
      cardtype: "Master Card",
      amount: "-$45",
    },
  ])
  return (
    <div className="App">
      <nav className='navbar'>
        <div className='navleft'>
         <span><img src={logo} /></span>
         <div>
           <a><BsSearch /></a>
           <input type='search' />
         </div>
        </div> 
        <div className='navright'>
          <div className='toggle'>
            <a className='active'><CiLight /></a>
            <a><MdDarkMode /></a>
          </div>
          <div className='profile'>
            <span><img src={profile} /></span>
            <p>Xure Bee</p>
            <a><RiArrowDropDownLine /></a>
            <a className='hamburger'><GiHamburgerMenu/></a>
          </div>
        </div>
      </nav>
      {/* ---------END OF NAV---------- */}
      <main>
        <aside>
          <div className='activeaside'>
            <a>
              <span><MdDashboard /></span>
              <h4>Dashoard</h4>
            </a>
          </div>
          <div>
            <a>
              <span><RiExchangeDollarFill /></span>
              <h4>Exchange</h4>
            </a>
          </div>
          <div>
            <a>
              <span><MdAccountBalanceWallet /></span>
              <h4>Wallet</h4>
            </a>
          </div>
          <div>
            <a>
              <span><GrTransaction /></span>
              <h4>Transaction</h4>
            </a>
          </div>
          <div>
            <a>
              <span><RiPieChartFill /></span>
              <h4>Analytics</h4>
            </a>
          </div>
          <div>
            <a>
              <span><FiMessageSquare /></span>
              <h4>Messages</h4>
            </a>
          </div>
          <div>
            <a>
              <span><MdHelpCenter /></span>
              <h4>Help Center</h4>
            </a>
          </div>
          <div>
            <a>
              <span><RiSettings3Fill /></span>
              <h4>Settings</h4>
            </a>
          </div>
        </aside>
        <div className='maindiv'>
          <header className='maindivheader'>
            <h1>Overview</h1>
            <input type='date' />
          </header>
          <div className='atmcards'>
            {card.map(eachcard=> 
              <card key={eachcard.id} className='eachcard'>
                <top>
                  <div className='cardtopleft'>
                    <img className='img imglogo' src={eachcard.logo} />
                    <h3>{eachcard.nameoflogo}</h3>
                  </div>
                  <div className='cardtopright'>
                   <img className='img' src={eachcard.visa} />
                  </div>
                </top>
                <middle>
                  <h1>{eachcard.amount}</h1>
                  <div className='imgchipdiv'>
                    <img className='imgchip' src={cardchip}></img>
                  </div>
                </middle>
                <bottom>
                  <div>
                    <p>Card Holder</p>
                    <h4>BRENDAN XURE</h4>
                  </div>
                  <div className='cardbottomright'>
                    <div>
                      <p>Expiry</p>
                      <h4>08/23</h4>
                    </div>
                    <div>
                      <p>CVV</p>
                      <h4>924</h4>
                    </div>
                  </div>
                </bottom>
              </card>
              )}
          </div>
          <div className='reportdiv'>
            {report.map(eachreport=>
            <article className='eachreport'>
              <h4>{eachreport.title}</h4>
              <details>
                <h2>{eachreport.amount}</h2>
                <p className='percent'>{eachreport.percent}</p>
              </details>
              <h5>Compared to last month</h5>
            </article>  
            )}
          </div>
          <div className='paymentdiv'>
            <div>
            <h2>Fast</h2>
            <h2>Payment</h2>
            </div>
            <div className='paymentlist'>
              <div><span> </span></div>
              {payment.map(eachpayment=>
              <div>
                <span></span>
                <p>{eachpayment.title}</p>
                <h4>{eachpayment.amount}</h4>
              </div>  
              )}
            </div>
          </div>
          <div className='chart'>
            <Line 
              data={data}
            width={400}
            height={190}
            />
          </div>
        </div>
        <div className='rightside'>
          <div className='investment'>
            <div className='investmenttop'>
              <h3>Investment</h3>
              <a>
                <p>More</p>
                <span>...</span>
              </a>
            </div>
            <div className='investmentmain'>
               {inv.map(eachinv=>
                <div key={eachinv.id} className="eachinvdiv">
                  <span><img src={eachinv.logo} /></span>
                  <h4>{eachinv.name}</h4>
                  <div className='eachinvdivdate'>
                    <h5>{eachinv.date}</h5>
                    <h5>{eachinv.time}</h5>
                  </div>
                  <div className='eachinvdivnum'>
                    <h5>{eachinv.number}</h5>
                    <h5>Brendi</h5>
                  </div>
                  <div className='eachinvdivpercent'>
                    <h4>{eachinv.amount}</h4>
                    <p>{eachinv.percent}</p>
                  </div>
                </div>
                )} 
            </div>
          </div>
          <div className='transactions'>
            <div className='investmenttop'>
                <h3>Recent Transactions</h3>
                <a>
                  <p>More</p>
                  <span>...</span>
                </a>
            </div>
            <div className='transactionsmain'>
                {transactions.map(eachtransac=>
                  <div key={eachtransac.id} className="eachinvdiv">
                    <div className='eachtransacdivcol1'>
                      <span>{eachtransac.logo}</span>
                      <div>
                        <h4>{eachtransac.name}</h4>
                        <h5>{eachtransac.date}</h5>
                      </div>
                    </div>
                    <div  className='eachtransacvisanumdiv'><span><img src={eachtransac.visa} /></span>
                      <div>
                        <h5>{eachtransac.number}</h5>
                        <h5>{eachtransac.cardtype}</h5>
                      </div>
                    </div>
                    <h4 className='eachtransacamount'>{eachtransac.amount}</h4>
                  </div>
                  )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
