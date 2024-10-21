import React from "react";

import { LoginButton } from "./LoginButton";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="topSection">
        <div className="family">
        <img src="/imgs/familyHug.png"  className="familyimg" />
        </div>
       
        {/* <div className="blueCirclediv">
        <div className="blueCircle" ></div>
        </div> */}
        
       
        <div className="landingTitleSection">
          <h1 className="landingTopTitle">Budget Buddy</h1>
        
          <div  className="grayArea">
          <h2 className="landingTopSubTitle">LEARN HOW TO MANAGE YOUR MONEY</h2>
          <p className="landingTopPhrase">
            The first step towards wealth is living below your means. It's easier than you think!
          </p>

          <LoginButton text="START NOW" />
          </div>
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
        Prioritizing debt repayment is one of the most important steps toward financial freedom. The longer you carry debt, the more interest accumulates, increasing the overall amount you owe. By paying off as much debt as you can, as early as possible, you reduce the amount of interest you'll pay over time, which can save you significant money. It also frees up more of your income for savings and investments. Consider making extra payments when possible or focusing on high-interest debt first to minimize long-term costs. The sooner you're free of debt, the sooner you'll feel the relief and flexibility to make other financial decisions.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Adjust for Your Needs</span>
        <div className="listContent">
        The standard 50-30-20 budget rule suggests allocating 50% of your income to necessities, 30% to discretionary spending, and 20% to savings and debt repayment. However, everyone's financial situation is different. Your cost of living, family size, and location might require a higher or lower percentage for necessities like housing, groceries, and transportation. The key is to adapt the rule to reflect your reality, ensuring you're meeting your basic needs without neglecting savings or fun. Regularly review your budget and make adjustments as circumstances change, such as when you move, get a raise, or face unexpected expenses.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Save and Invest</span>
        <div className="listContent">
        Saving is essential for building a financial cushion, but investing allows your money to grow over time, bringing you closer to financial independence. The more you can set aside for investments, the more you can take advantage of compound interest, where your earnings generate even more returns. Start by building an emergency fund for unexpected expenses, then explore different investment options like retirement accounts, stocks, bonds, or real estate. Educating yourself on investment strategies can help you make informed decisions, giving you the confidence to grow your wealth steadily.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Balance Fun and Responsibility</span>
        <div className="listContent">
        While it’s important to save and focus on financial goals, it’s equally essential to set aside a budget for "wants"—things that bring you joy or relaxation. By allocating a reasonable portion of your income to leisure and entertainment, you can avoid burnout and resentment that comes from feeling too restricted. Finding this balance helps maintain motivation for long-term financial goals. Whether it’s a small treat, a vacation, or a hobby, enjoy your money responsibly, knowing it’s part of a healthy financial plan.
        </div>
      </li>
      <li className="listItem">
        <span className="listTitle">Practice Patience and Self-Control</span>
        <div className="listContent">
        Financial success is a marathon, not a sprint. It’s natural to want things immediately, but exercising patience and self-control can help you avoid impulse purchases or decisions that could derail your financial progress. Set clear goals and remind yourself that sacrifices today will pay off in the future. By delaying gratification, you’ll be able to afford bigger and more meaningful purchases without going into debt or compromising your financial freedom. This long-term perspective not only helps you reach your goals but also gives you peace of mind knowing you’re on a solid path to success.
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
