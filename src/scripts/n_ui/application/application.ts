import MainDatabase from "../../n_logic/db/MainDatabase";


class MainApplication extends HTMLElement {

    private readonly _db : MainDatabase = null;
    constructor(){
        super();

        this._db = new MainDatabase();
    }

    
    runApplication() {

    }
}
customElements.define("application-main", MainApplication);
export default MainApplication;