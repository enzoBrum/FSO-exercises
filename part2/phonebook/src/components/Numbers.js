const Numbers = ({persons}) => 
    <>
        <h2>Numbers</h2>
        <div>
        {persons.map( 
            (p) => 
            <div key={p.name}>
                {p.name} {p.phone}
            </div> 
            )
        }
        </div>
    </>

export default Numbers
