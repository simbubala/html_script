import java.util.Scanner;
class nnumber
{
int c;
void add(){
	Scanner s=new Scanner(System.in);
	System.out.println("Enter Number:");
    int a=s.nextInt();
	System.out.println(a);
	int b=1;
    for(int i=0;i<=a;i++)
      {
         c=i+b;
      }
System.out.println(c);
}
public static void main(String[] args)
{
nnumber n=new nnumber();
n.add();
}
}