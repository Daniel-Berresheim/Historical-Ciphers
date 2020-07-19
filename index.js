

const tabs = document.querySelectorAll('[data-tab-target]')
const tabs_content = document.querySelectorAll('[data_tab_content]')

tabs.forEach(tab =>
{
	tab.addEventListener('click',() => 
	{
		const target = document.querySelector(tab.dataset.tabTarget)
		tabs_content.forEach(tabs_content => tabs_content.classList.remove('active'))
		tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
		target.classList.add('active')
	})
})