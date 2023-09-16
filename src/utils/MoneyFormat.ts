export class MoneyFormat {
    
    private static instance: MoneyFormat;

    private formatter: Intl.NumberFormat;

    private constructor() {

        this.formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

    }

    public static format(value: number): string {
        return MoneyFormat.getInstance()
                .formatter.format(value);
    }

    private static getInstance(): MoneyFormat {

        if (!MoneyFormat.instance) {
            MoneyFormat.instance =
                    new MoneyFormat();
        }

        return MoneyFormat.instance;

    }
    
}