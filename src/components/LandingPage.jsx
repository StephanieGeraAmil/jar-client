import React from "react";

import { LoginButton } from "./LoginButton";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="topSection">
        <img src="/imgs/familyHug.png" className="family" />
        <img className="blueCircle" />
       
        <div className="information">
          <h1 className="landingTopTitle">Budget Buddy</h1>
          <h2 className="landingTopSubTitle">LEARN HOW TO MANAGE YOUR MONEY</h2>
          <p className="landingTopPhrase">
            The first step towards wealth is living below your means. It's easier than you think!
          </p>

          <LoginButton text="START NOW" />
        </div>
        <img src="./jar.png" className="jar" />
      </div>
      <div className="how">
      
        <div className="howInfo">
          <h1 className="darktitle">How it works?</h1>
          <div className="steps">
            <div className="step">
              <h1 className="title">00</h1>
              <h3 className="subTitle">Set Aside Time</h3>
              <p className="paragraph">
                Dedicate an hour to discuss the budget with everyone involved in your family finances.
              </p>
            </div>
            <div className="step">
              <h1 className="title">01</h1>
              <h3 className="subTitle">Choose Your Distribution Rule</h3>
              <p className="paragraph">
                Follow simple and effective rules like the 50/30/20 (or 50/20/20/10 if tithing). Spend 50% of your income on necessities, 30% (or 20%) on wants, and 20% on savings (or debt repayment).
              </p>
            </div>
            <div className="step">
              <h1 className="title">02</h1>
              <h3 className="subTitle">Add your Income</h3>
              <p className="paragraph">
                Combine all household paychecks for the month. For fluctuating incomes, use the lowest amount from the past six months.
              </p>
            </div>
            <div className="step">
              <h1 className="title">03</h1>
              <h3 className="subTitle">Adjust as Needed</h3>
              <p className="paragraph">
                Once your incomes are added, adjust the percentages to fit your budget. If necessary, redistribute to ensure all categories are covered.
              </p>
            </div>
            <div className="step">
              <h1 className="title">04</h1>
              <h3 className="subTitle">
                Plan in advance
              </h3>
              <p className="paragraph">
                Plan for Annual, Semi-Annual, and Seasonal Expenses
                Save monthly for these expenses to avoid budget shocks.
              </p>
            </div>
            <div className="step">
              <h1 className="title">05</h1>
              <h3 className="subTitle">Spend Wisely</h3>
              <p className="paragraph">
                Stick to your budget, pay fixed expenses early, and check your category balance before making purchases. Record every expense, even small ones like coffee.
              </p>
            </div>
          </div>
        </div>
       

      </div>
     
      <div className="caveats">
        <div className="eighty">
          <h3 className="subTitle">Tips for Success</h3>
          <ul className="styledList">
      <li className="listItem">
        <span className="listTitle">Pay Off Debt ASAP</span>
        <div className="listContent">
          Prioritize debt repayment. Save and pay off as much as possible to achieve financial freedom faster.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Adjust for Your Needs</span>
        <div className="listContent">
          Adapt the 50% rule for necessities according to your household's reality. Some may need more, others less.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Save and Invest</span>
        <div className="listContent">
          The more you save, the more you can invest, bringing you closer to financial freedom.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Balance Fun and Responsibility</span>
        <div className="listContent">
          Keep a budget for wants to maintain balance and avoid feeling restricted.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Practice Patience and Self-Control</span>
        <div className="listContent">
          Achieving your financial goals takes time and discipline. You'll afford things without compromising your peace or freedom.
        </div>
      </li>
    </ul>
        </div>
      </div>
     
      <div className="final">
        <h1 className="smallerTitle"> YOU CAN DO IT!</h1>
        <p className="paragraph">
          After paying off debt, you'll save more, invest, and gain control over your future. Enjoy peace and freedom. What are you waiting for?
        </p>
        <LoginButton text="START NOW" />
      </div>
    </div>
  );
};
export default LandingPage;
