module.exports={

    getAll:(req,res)=>{
            try{
            return res.status(200).json({msg: "all products"})
            }
            catch
            {
                return res.status(500).json({msg:`500 server error`})
            }      
    },
    getById:(req,res)=>{
            try{
                let prodid=req.params.id;
                return res.status(200).json({msg: `product by id ${prodid}`})
               }
            catch{       
                return res.status(500).json({msg:`500 server error`})
                }     
    },
    addNew:(req,res)=>{
            try{
            console.log(req.body);
            return res.status(200).json({msg: "new product added"})}
            catch{
            return res.status(500).json({msg:`500 server error`})
                }
    },
    updateById:(req,res)=>{
        try{
        let prodid=req.params.id;
        return res.status(200).json({msg: `product ${prodid} updated`})
        }
        catch{
            return res.status(500).json({msg:`500 server error`})

        }
    },
    deleteById:(req,res)=>{
        try{
        let prodid=req.params.id;
        return res.status(200).json({msg: `product ${prodid} deletes`})
        }
        catch{
            return res.status(500).json({msg:`500 server error`})

        }
    }
    };