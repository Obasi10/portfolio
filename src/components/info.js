import file1 from "../Files/Interactive sales dashboard.xlsx";
import file2 from "../Files/Innocent Obasi Excel project.xlsx";
import file3 from "../Files/The Ideal Solution to the Legendre Equation and the Laplace Equation.pdf";
import file4 from "../Files/New Analytical solutions to variable coefficients differential equations.pdf";
import file5 from "../Files/Mooring system analysis.pdf";
import file6 from "../Files/Obasi-Legendre.py";
import file7 from "../Files/roll_a_die.py";
import file9 from "../Files/Variable_Coefficients_Differential_Equations calculator.py";
import file10 from "../Files/USAID Supply Chain analysis.xlsx";


import Project from "./images";

const state=[
    {
        id: "Mission",
        pos:3,
        content: ["To harness skills in IT, science and engineering towards the goal of forming a niche in the cyberspace; that enhances the effective synchronization of these fields (careers), with the aim of providing quality and comprehensible solutions to the needs of the environment and the world at large.",
        "To champion comprehensible, better quality and aesthetical data presentations in the market of data presentation that yearns for more innovation."]
    },
    {
        id: "Vision",
        pos:4,
        content: [
            "To emerge later someday as one of the leading personalities from Africa in cyberspace, science and engineering.",
            "To create solutions by synchronizing channels of distribution and communication in Africa. This in turn will reduce downtime thereby increasing productivity in the continent."
        ]
    },
    {
        id: "Future Projects",
        pos:5,
        content: [
            "Marine management app to keep track of voyages, crew members, ships and ports that has any thing to do with the Nigerian Waterways. The purpose of this is to  have better control of the system and reduce downtime in the marine transport system, which will in turn aid in the faster movement of goods, thereby aiding productivity.",
            "Register app with a quality and newly-improved face recognition system; to be used in estates, schools, churches, banks, offices etc. It will be able to generate response in quick time, declaring if an individual is permitted at a place or not."
        ]
    }
]

export default state

export const properties=[
    {
        id: "p1",
        Name: "Sales Data Analysis with an Interactive Dashboard Design",
        content: [
            "In this project, I analysed the sales data on various product across two years. This project also contains an interactive dashboard containin slicers, giving viewers better comprehension and readability of the data.",
            "The excel file contains four sheets, namely: dashboard, Input data, master data and analysis sheet."
        ],
        inspect: file1,
        image: Project["1"],
        web: null
    },
    {
        id: "p2",
        Name: "Data Analysis on Revenue Allocation in Nigeria",
        content: [
            "This project analyses the summary of distribution of revenue allocation to Local Government Councils in Nigeria by Federation Account Allocation Committee for the month of November, 2021 Shared in December, 2021. The project also contains a well designed dashboard.",
            "The aim of this project was to utilize my analytic skills in other areas apart from science and engineering. The analysis showed that the northern part of the country received more allocation in the month of november than the southern part. This was an impressive project for me."
        ],
        inspect:file2,
        image: Project["2"],
        web: null  
    },
    {
        id: "p3",
        Name: "Exact Analytic Solution to the Legendre Equation",
        content: [
            "The Legendre equation arises in mathematical models of heat conduction in spherical geometries and expansion of electromagnetic potential.",
            "It is encountered in situations where one has to solve partial differential equations containing the Laplacian polar coordinates.This research work presents the simplest form of the Legendre function of the second kind, Qn(x). Before now, it had been presented in form of a recursion formula."
        ],
        inspect:file3,
        image: Project["3"],
        web: null 
    },
    {
        id: "p4",
        Name: "Exact Anaytic Solutions to Variable Coefficient Differential Equations",
        content: [
            "This research work presents the newest and exact (finite) solutions to sets of differential equations which prior before now, are known to be solved by the power series’ method and some other numerical methods leading to approximations.",
            "It introduces new solutions to two different types of variable coefficients differential equations."
        ],
        inspect:file4,
        image: Project["4"],
        web: null
    },
    {
        id: "p5",
        Name: "Mooring System Analysis of an Offshore Structure",
        content: [
            "The environmental load on an offshore platform required to move an anchor depends on a number of parameters. The value of this had in the past been gotten through iteration and interpolation, however, this research work presents perhaps a more accurate method. The research work analyzes the effects of the variation of each of these parameters independent of the others, on the environmental load to move the anchor.",
            " A mathematical model (zero equation) is set up using the catenary line equations. The zero of this equation is found using the MATLAB fzero command. A MATLAB script Env_Load.m is developed to evaluate the values of the environmental load upon the variation of mooring parameters. "
        ],
        inspect:file5,
        image: Project["5"],
        web: null
    },
    {
        id: "p6",
        Name: "Legendre Equation Calculator",
        content: [
            "A smart variable coefficient differential equation calculator that evaluates the general solution to the differential equation below:",
            "				(1-x^2)y\" - 2xy' + n(n+1)y = 0",
            "where n represents an non-negative integer. The methodology used for this calculator was developed by Innocent Chukwuma Obasi in his research work 'The Best Solution to Legendre Differential Equation (2022, ongoing review)'.",
            "This method proves to be far better than other contemporary methods including the usage of Legendre polynomials. This calculator is able to detect invalid inputs for correction, and also ensure a readable and understandable output. ",
            "The Calculator was programmed on Python and also on Javascript using React to produce a beautiful presentation of solution."
        ],
        inspect:file6,
        image: Project["6"],
        web: "https://the-ultimate-calc.vercel.app/"
    },
    {
        id: "p7",
        Name: "Roll 'n' Guess",
        content: [
            "A game that to test one's ability to guess. The game was first developed with python, importing the library pandas.",
            "The programming of the game involved analytic skills in statistics.",
            "The game was also programmed on Javascript using React to produce a beautiful presentation of solution."
        ],
        inspect:file7,
        image: Project["7"],
        web: "https://roll-and-guess.vercel.app/" 
    },
    {
        id: "p8",
        Name: "Portfolio Page",
        content: [
            "This page was created using HTML, javascript (React) and CSS. This is just the first among many other website design projects that will be done soon.",
            "My goal is to incorporate the latest skills in website design to provide the much needed aesthetics."
        ],
        inspect:null,
        image: Project["8"],
        web: null 
    },
    {
        id: "p9",
        Name: "Variable Coefficients Differential Equation Calculator",
        content: [
            "A smart variable coefficient differential equation calculator that evaluates the general and particular solutions to the differential equation below:",
            "				y\" + Axy' - nAy = 0",
            "where n represents an integer while A represents any number(including negative numbers). The methodology used for this calculator was developed by Innocent Chukwuma Obasi in his publication 'New solutions to variable coefficients differential equation (2021, ongoing review)'.",
            "This method proves to be better than other contemporary methods. This calculator is able to detect invalid inputs for correction, and also ensure a readable and understandable output."
        ],
        inspect:file9,
        image: Project["9"],
        web: null
    },
    {
        id: "p10",
        Name: "USAID Supply Chain Data Analysis: also Including Interactive Dashboards.",
        content: [
            "In this project, I analysed the USAID supply chain data to evaluate the performance based on time indicators.",
            "Also, contained in the xlsx document are the on-time delivery and late delivery dashboards, which are fully interactive."
        ],
        inspect:file10,
        image: Project["10"],
        web: null 
    }
]