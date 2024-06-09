import './bottles.css'
import strawberrybottle from '../../assets/strawberry-1.png'
import elderberrybottle from '../../assets/elderberry-1.png'
import immuneicon from '../../assets/immune-1.png'
import inflame from '../../assets/inflame-1.png'
import stomach from '../../assets/stomach-1.png'



function Strawberry() {
    return ( 
        <>
                    <div className="left-container
w-[60vw]
h-[30vh]
md:w-[40vw]
md:h-[60vh]
rounded-[0.5em]
p-5
text-left
flex
flex-col 
gap-9
relative
            ">
                            <img src={strawberrybottle} className='sbbottleimg
absolute
justify-self-center
bottom-[-10%]
md:right-[-9em]
right-[-3em]
z-[-1]
lg:w-[400px]
w-[200px]
            '/>
                <h1 className="left-title
font-main
text-2xl 
text-[2em]  
leading-[0.8]  
md:leading-[0.8]
p-2  
                ">
                    Strawberry
                </h1>
                <p className="left-subheading
text-[0.61em]
w-[70%]
                ">
                ALL PRODUCTS ARE MADE WITH 
                ALKALINE WATER, ORGANIC FRUIT 
                & NATURAL HERBS
                </p>
            </div> 

                                <div className="left-container
w-[60vw]
h-[30vh]
md:w-[40vw]
md:h-[60vh]
rounded-[0.5em]
p-5
text-left
flex
flex-col 
gap-9
            ">
            <img src={elderberrybottle} className='sbbottleimg
absolute
justify-self-center
bottom-[-21%]
md:right-[-7em]
right-[-2em]
z-[-1]
lg:w-[350px]
w-[185px]
            '/>
                <h1 className="left-title
font-main
text-2xl 
text-[2em]  
leading-[0.8]  
md:leading-[0.8]
p-2  
                ">
                    Elderberry
                </h1>
                <p className="left-subheading
text-[0.61em]
w-[70%]
                ">
                ALL PRODUCTS ARE MADE WITH 
                ALKALINE WATER, ORGANIC FRUIT 
                & NATURAL HERBS
                </p>
            </div> 
                        {/* <div className="right-wrapper
md:w-[30vw]
md:h-[60vh]
flex
flex-col
justify-between
            ">
                <div className="right-container-1
md:w-[30vw]
md:h-[15vh]
rounded-[0.5em]
mt-7
text-[0.61em]
flex
justify-around
place-items-center
p-5
                ">
                    <img src={immuneicon} alt="immune" className="immuneicon
w-[30px]
                    "/>
                    <p className='
w-[70%]
                    '>
                    Immune Support: Elderberries 
                    are rich in antioxidants and 
                    vitamin C, which can help support 
                    your immune system.
                    </p>
                </div>
                <div className="right-container-2
md:w-[30vw]
md:h-[15vh]
rounded-[0.5em]
text-[0.61em]
flex
place-items-center
justify-around
p-5
                ">
                    <img src={inflame} alt="anti-inflammatory" className="immuneicon
w-[30px]
                    "/>
                    <p className='
w-[70%]
                    '>
                    Anti Inflammatory: Elderberries and seamoss contain 
                    compounds that have anti-inflammatory 
                    properties.
                    </p>
                </div>
                <div className="right-container-3
md:w-[30vw]
md:h-[15vh]
rounded-[0.5em]
text-[0.61em]
flex
place-items-center
justify-around
p-5
                ">
                                        <img src={stomach} alt="immune" className="immuneicon
w-[30px]
                    "/>
                    <p className='
w-[70%]
                    '>
                    Digestive Health: Lemonade can aid digestion,
                     while the fiber in elderberries 
                     may support a healthy gut.
                     </p>
                </div>

            </div> */}
        </>
     );
}

export default Strawberry;