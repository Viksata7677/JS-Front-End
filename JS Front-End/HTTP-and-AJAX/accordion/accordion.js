async function solution() {
    const mainEl = document.querySelector('#main');
     
    const articleRes = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const articlesArr= await articleRes.json();
    console.log(articlesArr);
    
    articlesArr.forEach(async articleObj => {
        const articleDetailRes = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleObj._id}`);
        const articleDetailData = await articleDetailRes.json();
        console.log(articleDetailData);
        
        const accordionDivEl = document.createElement('div');
        accordionDivEl.classList.add('accordion');

        const headDivEl = document.createElement('div');
        headDivEl.classList.add('head');

        const titleSpanEL = document.createElement('span');
        titleSpanEL.textContent = articleDetailData.title;

        const viewControllButtonEL = document.createElement('button');
        viewControllButtonEL.classList.add('button');
        viewControllButtonEL.id = articleDetailData.id;
        viewControllButtonEL.textContent = 'More';

        viewControllButtonEL.addEventListener('click', handleMoreContent);
        
        const extraDivEl = document.createElement('div');
        extraDivEl.classList.add('extra');
        
        const contentPEl = document.createElement('p');
        contentPEl.textContent = articleDetailData.content;
        
        headDivEl.appendChild(titleSpanEL);
        headDivEl.appendChild(viewControllButtonEL);
        
        extraDivEl.appendChild(contentPEl);
        
        accordionDivEl.appendChild(headDivEl);
        accordionDivEl.appendChild(extraDivEl);
        mainEl.appendChild(accordionDivEl);
        
        function handleMoreContent() {
            if (viewControllButtonEL.textContent === 'More') {
                extraDivEl.classList.remove('extra');
                viewControllButtonEL.textContent = 'Less';
            } else {
                extraDivEl.classList.add('extra');
                viewControllButtonEL.textContent = 'More';
            }

        }
    })
}

solution();