
export class Model<T extends { id: string }>{
    protected items:T[] = [];

    add(item:T){
        this.items.push(item);
    }

    get():T[]
    {
        return this.items;
    }

    getById({id}:{id:string}):T|null
    {
        const item = this.items.find(item => item.id === id);
        return item || null;
    }
}