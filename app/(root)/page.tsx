import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Pranav", lastName: "Jinturkar", email: "pranavjinturkar452@gmail.com"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your account and transactions effeciently."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 9999}, {currentBalance: 1111}]}
      />
    </section>
  )
}

export default Home