// API request options
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    },
};
let selectCompany = null
// Fetch stock stats data
const fetchStock = async () => {
    try {
        const response = await fetch(`https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata`, options);
        const data = await response.json();
        const stockStats = data.stocksStatsData[0];
        console.log(stockStats);
        return stockStats;
    } catch (error) {
        console.error("Error fetching stock stats data:", error);
    }
};

// Fetch stock chart data
const fetchStockData = async (company, period) => {
    try {
        const response = await fetch(`https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata`, options);
        const data = await response.json();
        const stockData = data.stocksData[0][company]?.[period];

        if (stockData) {
            const values = stockData.value;
            const timeStamps = stockData.timeStamp.map((timestamp) =>
                new Date(timestamp * 1000).toLocaleDateString()
            );
            updateChart(values, timeStamps);
        } else {
            console.error(`No data available for ${company}`);
        }
    } catch (error) {
        console.error(`Error fetching stock data for ${company}:`, error);
    }
};

// Fetch stock summary
const fetchSummary = async (company, profit, bookValue) => {
    try {
        const response = await fetch(`https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata`, options);
        const data = await response.json();
        const summaryData = data.stocksProfileData[0][company]["summary"];

            renderSummary(summaryData, company, profit, bookValue);
       
    } catch (error) {
        console.error(error);
    
    }
};

// Render stock summary
const renderSummary = (summaryData, company, profit, bookValue) => {
    const companyName = document.querySelector('.company_name');
    const companyProfit = document.querySelector('.company_profit');
    const companyValue = document.querySelector('.company_value');
    const summaryText = document.querySelector('#summary-text');
     const profitColor = profit > 0 ? "#39FF14" : "red";
    companyName.innerHTML = `${company}`;
    companyProfit.innerHTML = `${parseFloat(profit).toFixed(2)}%`;
    companyValue.innerHTML = `$${bookValue}`;
    summaryText.innerHTML = summaryData;

    companyProfit.style.color = profitColor;

};

// Render stock stats to the table
const renderStock = (stockStats) => {
    const companyTable = document.querySelector('#company-table tbody');
    companyTable.innerHTML = '';

    for (const company in stockStats) {
        if (company !== '_id') {
            const { bookValue, profit } = stockStats[company];
            const profitColor = profit > 0 ? "#39FF14" : "red";
            // Create a new row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td> <button 
                        class="company-btn" 
                        data-company="${company}" 
                        data-profit="${profit}" 
                        data-book-value="${bookValue}"> ${company} </button></td>
                
                <td class="data-book-value">${`${parseFloat(bookValue).toFixed(2)}`}</td>
                <td style="color: ${profitColor};">${`${parseFloat(profit).toFixed(2)}%`}</td>
            `;

            companyTable.appendChild(row);
        }
    }

    // Add event listeners to buttons
    
    const buttons = document.querySelectorAll('.company-btn');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const company = e.target.getAttribute('data-company');
            const profit = e.target.getAttribute('data-profit');
            const bookValue = e.target.getAttribute('data-book-value');
            selectCompany = company;
            console.log(`Fetching data for ${company}`);
            fetchSummary(company, profit, bookValue);
            fetchStockData(company, "5y");
        });
    });
};

const button1Mo = document.getElementById("btn1mo");
button1Mo.addEventListener("click", () => {
   fetchStockData(selectCompany,"1mo");
});

const button3Mo = document.getElementById("btn3mo");
button3Mo.addEventListener("click", () => {
  fetchStockData(selectCompany,"3mo");
});

const button1Yr = document.getElementById("btn1y");
button1Yr.addEventListener("click", () => {
    fetchStockData(selectCompany, "1y");
});

const button5yr = document.getElementById("btn5y");
button5yr.addEventListener("click", () => {
   fetchStockData(selectCompany, "5y");
});

// Initialize the application
const init = async () => {
    const stockStats = await fetchStock();
        renderStock(stockStats);

        // Select the first company by default
        const firstCompany = Object.keys(stockStats).find(company => company !== '_id');
            const { profit, bookValue } = stockStats[firstCompany];
            selectCompany = firstCompany; 
            fetchSummary(firstCompany, profit, bookValue);
            fetchStockData(firstCompany, "5y");
    
};


document.addEventListener('DOMContentLoaded', () => init());

let lineChart = null;

// Update the chart dynamically
function updateChart(data, labels) {
    const ctx = document.getElementById("myChart").getContext("2d");

    if (lineChart) {
        lineChart.destroy();
    }

    lineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Stock Prices`,
                    data: data,
                    borderColor: "blue",
                    borderWidth: 2,
                    tension: 0.4,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                },
            },
            plugins: {
                legend: { display: true },
            },
        },
    });
}
