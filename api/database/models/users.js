module.exports=function(sequelize, dataTypes){
    let alias="Users";
    let cols={
        id_user:{
        type: dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false},
    
        user_name:{
        type:dataTypes.STRING,
        allowNull:false},

    user_email:{
            type:dataTypes.STRING,
            allowNull:false},
    
        password:{
        type:dataTypes.STRING,
        allowNull:false},
    
        profile_img:{
        type:dataTypes.STRING},

        admin_user:{
            type:dataTypes.STRING},

    };
    
    let config={
        table_name:"Users",
        timestamps:false
    }
    
    
        let Users=sequelize.define(alias, cols, config)

        return Users
    }
    