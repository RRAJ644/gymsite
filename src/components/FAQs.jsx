import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className='container faqs-cont'>
            <SectionHead icon={<FaQuestion/>} title='FAQs'/>
            <div className='faqs-wrapper'>
                {
                    faqs.map(({id, question, answer})=>{
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}
// https://youtu.be/FiWby-T0Ec0?t=8731

export default FAQs