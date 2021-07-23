import { Bankdetails } from "./bankdetails";
import { Existingloandetails } from "./existingloandetails";
import { Loansanction } from "./loansanction";
import { MonthlyInstallementsAndPendings } from "./monthly-installements-and-pendings";

export class Person {
    pid:number;
	name:string;
	email:string;
	panno:string;
	addr:string;
	mono:string;
	status:string
	   
	existingloan:Existingloandetails;
	bankdetails:Bankdetails;
	loansanction:Loansanction;
	installements:MonthlyInstallementsAndPendings
}
