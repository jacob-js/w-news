import React from 'react'
import ArticleCard from '../../commons/ArticleCard'
import Wrapper from '../../partials/Wrapper'

const articles = [
    {
        "author": "Dana Khraiche",
        "title": "Saudi National Bank Chair Resigns After Credit Suisse Remark - Yahoo Finance",
        "description": "(Bloomberg) -- Most Read from BloombergFirst Citizens Nears Deal to Buy Silicon Valley Bank, Sources SayFirst Citizens Buys Silicon Valley Bank After Run on ...",
        "url": "https://finance.yahoo.com/news/saudi-national-bank-chairman-resigns-055618912.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/KGm85ViNQZBVGcCui0kIXw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/bloomberg_markets_842/3e34ecbd401cf03eb78f423e3c2d27a5",
        "publishedAt": "2023-03-27T06:46:00Z",
        "content": "(Bloomberg) --\r\nMost Read from Bloomberg\r\nAmmar Al Khudairy, the chairman of Credit Suisse Group AGs largest shareholder, has resigned just days after his comments helped spark a slump in the Swiss l… [+2005 chars]"
    },
    {
        "author": null,
        "title": "Loose tire shoots off pickup truck on 118 Freeway in Chatsworth; sends vehicle flying into air - ABC7",
        "description": null,
        "url": "https://www.youtube.com/watch?v=DVpqAaQz90g",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-1188301651.jpg?resize=1200,800",
        "publishedAt": "2023-03-27T06:18:58Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
        "author": null,
        "title": "Jack Ma's Self-Exile Shows Mistrust of China's Policy Shift - Bloomberg Television",
        "description": null,
        "url": "https://www.youtube.com/watch?v=y6qrrE9QW5s",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Shuffle-Shopping-Pins.png?resize=1200,732",
        "publishedAt": "2023-03-27T05:39:53Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
        "author": null,
        "title": "Jack Ma returns to mainland China to visit school in Hangzhou - South China Morning Post",
        "description": "Alibaba founder Jack Ma has returned to mainland China after more than a year of overseas travel, and visited a school he founded in the city of Hangzhou, according to sources.",
        "url": "https://www.scmp.com/tech/big-tech/article/3214955/alibaba-founder-jack-ma-returns-mainland-china-visit-school-hangzhou",
        "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2023/03/27/abce0b1c-a603-4d45-a3d4-cf307bc1c22f_aff784aa.jpg?itok=vr-YUvnG&v=1679893790",
        "publishedAt": "2023-03-27T05:11:22Z",
        "content": "Published: 1:11pm, 27 Mar, 2023\r\nUpdated: 2:24pm, 27 Mar, 2023"
    }
]

function Home() {
  return (
    <Wrapper>
        <div className='mt-14'>
            <div className="text-4xl sm:text-5xl font-bold">The world's latest news</div>
            <div className="grid sm:grid-cols-3 gap-10 mt-16">
                {
                    articles.map((article, index) =><ArticleCard {...article} key={index} />)
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default Home