import React from "react";

import { LoginButton } from "./LoginButton";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="topSection">
        <img src="/imgs/familyHug.png" className="family" />
        <img className="blueCircle" />
        <img src="./jar.png" className="jar" />
        <h1 className="landingTopTitle">Budget</h1>
        <h2 className="landingTopSubTitle">LEARN HOW TO MANAGE YOUR MONEY</h2>
        <p className="landingTopPhrase">
          The first rule towards wealth is living beneath your means. Is easier
          than you'll think
        </p>

        <LoginButton text="START NOW" />
      </div>
      <div className="how">
        <div className="eighty">
          <div className="rowflex">
            <div className="middle">
              <h1 className="title">How it works?</h1>
              <p className="paragraph">
                Set aside an hour or so to discuss the budget with everyone
                involved in your family finances
              </p>
              <p className="paragraph">
                There are several rules to help you distribute the money, this
                tool is meant to be adaptable to all of them, so you can choose
                the one that best fit your current goals
              </p>
              <p className="paragraph">
                The idea behind it is that you know where every dollar is going
                and you make sure it goes to where is most needed
              </p>
            </div>
            <div className="middle">
              <img src="/imgs/budgeting.png" className="budgeting" />
            </div>
          </div>
        </div>
      </div>
      <div className="steps">
        <div className="step">
          <h1 className="title">01</h1>
          <h3 className="subTitle">Determine your distribution rule</h3>
          <p className="paragraph">
            One famous and simple rule is the 50/30/20. (or 50/20/20/10
            considering the tithe) That means 50 % of your income should be
            spent in necessities, 30 % ( or 20%) on wants and 20% goes to saving
            ( or paying debt)
          </p>
        </div>
        <div className="step">
          <h1 className="title">02</h1>
          <h3 className="subTitle">Add your income</h3>
          <p className="paragraph">
            Combine all the paychecks that your household receive in a month .
            If there are not fixed incomes just consider them as the minimum
            they have been on the past 6 months
          </p>
        </div>
        <div className="step">
          <h1 className="title">03</h1>
          <h3 className="subTitle">Adjust the model when needed</h3>
          <p className="paragraph">
            After you add your incomes you will see that according to the
            choosen percentages you will have a budget for each category, If you
            already know is not enough you are free to redistribute the
            percentages through the categories until it does (you'll need to
            delete the income and add it again)
          </p>
        </div>
        <div className="step">
          <h1 className="title">04</h1>
          <h3 className="subTitle">
            Consider your anual, semi-anual and seasonal expenses too
          </h3>
          <p className="paragraph">
            Each month you should save a portion of the anual and semi-anual
            expenses so the month you need to pay them you can still stick to
            the budget. If you know that there is a special occasion coming up
            you need to consider that in your budget too
          </p>
        </div>
        <div className="step">
          <h1 className="title">05</h1>
          <h3 className="subTitle">Spend money using wisely</h3>
          <p className="paragraph">
            Once the model is set you need to stick to it, pay every fixed
            expense as soon as you can and check the category balance before
            making any purchase. For this balance to be useful it's important
            you add each expense ( yes, even a cofee)
          </p>
        </div>
      </div>
      <div className="caveats">
        <div className="eighty">
          <p className="paragraph">
            If you have debt you need to pay it of assap, so if you are able to
            save more than 20% you definetly should.Save as much as you can! and
            pay as much as you can!
          </p>
          <p className="paragraph">
            Not all households can cover their necessities with the 50%, of
            their income (and others can cover them with les than 20%), so it's
            important that you adjust the percentages according to your unique
            reality.
          </p>
          <p className="paragraph">
            The more you save, the more you can invest more and you will reach
            financial freedom faster, don't overspend just because you .That
            said you must not eliminate the wants/fun category, otherwise, you
            wont stick to the budget really long.
          </p>
        </div>
      </div>
      <div className="patience">
        <div className="middle">
          <div className="eighty">
            <h1 className="smallerTitle">Not yet, is wisdom, not restriction</h1>
            <p className="paragraph">
              You want lot's of things, and if you are smart you will probably
              be able to get them, but you will need to wait and practice a lot
              of self control
            </p>
            <p className="paragraph">
              It's just a matter of time, You will buy things once you can
              afford them, so you wont waste any money, peace or freedom.
            </p>
          </div>
        </div>
        <div className="middle listOfThings">
          <img src="/imgs/house.png" className="things" />
          <img src="/imgs/vacation.png" className="things" />
          <img src="/imgs/car.png" className="things" />
          <img src="/imgs/interior.png" className="things" />
        </div>
      </div>
      <div className="final">
        <div className="middle">
          <h1 className="smallerTitle"> YOU CAN DO IT!</h1>
          <p className="paragraph">
            After Paying off debt, you will be able to save money, invest it
            (put the money to work for you) and have more control over your
            future. You'll gain Peace and Freedom, What are you waiting for?
          </p>
          <LoginButton text="START NOW" />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
