const flexJobH3 = document.querySelector('#fleks-job')
const nonFlexJobH3 = document.querySelector('#ikke-fleks-job')


async function fetchData(endpoint) {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    return data
}


const ruleConditions = []
const percentageOfConditions = []


async function pushDataToArrayAndLogPercentagesAndRenderPercentages () {
    const data = await fetchData('/data/workFreedom')

    data.forEach(workRulesCondition => {
        ruleConditions.push(workRulesCondition.rule_type)
        percentageOfConditions.push(workRulesCondition.percentage)
    })
    const hybridJobsPercentage = percentageOfConditions[0]
    const alwaysInOfficePercentage = percentageOfConditions[1]
    const alwaysRemotePercentage = percentageOfConditions[2]
    const noCompanyWideGuideLinesPercentage = percentageOfConditions[3]

    const flexibleJobsPercentage = hybridJobsPercentage + alwaysRemotePercentage + noCompanyWideGuideLinesPercentage
    console.log(flexibleJobsPercentage)


    const nonFlexibleJobsPercentage = alwaysInOfficePercentage
    console.log(nonFlexibleJobsPercentage)
    console.log(ruleConditions)
    console.log(percentageOfConditions)

    flexJobH3.textContent = `${flexibleJobsPercentage}%`
    nonFlexJobH3.textContent = `${nonFlexibleJobsPercentage}%`
}

pushDataToArrayAndLogPercentagesAndRenderPercentages()




