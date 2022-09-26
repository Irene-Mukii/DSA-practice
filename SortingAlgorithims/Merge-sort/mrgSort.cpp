
#include <iostream>
using namespace std;

void combine(int a[], int s, int m , int e){
    int* buffer = new int [e+1]; //for total size of merged array
     int k =s ;
     while(k<=e){
        buffer[k] = a[k];
        k = k+1;
     }
     int i = s;
     int j = m+1;
     k = s;

     while(i<=m && j<= e){
        if (buffer [i]<= buffer[j]){
            a[k] = buffer[i];
            i = i+1;
        }
        else{
            a[k] = buffer[j];
            j=j+1;
        }
        k = k+1;
     }

     while(i<=m){
        a[k] = buffer[i];
        i = i + 1;
        k = k+1;
     }

     while(j<=e){
        a[k] = buffer[j];
        j = j+1;
     }

     delete[] buffer;
}

//auxiliary function, helper fn
void mrgSort(int a[],int s, int e){
    if(s>=e){ //s and e represent start and end index
        return;
    }
    int m = (s+e)/2; //splits array into two
    mrgSort(a,s,m);
    mrgSort(a,m,e);
    combine(a,s,m,e);
}

void mrgSort(int a[], int n){ //wrapper function
    mrgSort(a, 0, n-1);
}

void display(int a[], int n){
    int i =0;
    while(i<n){
        cout<<a[i]<<",";
        i++;
    }
    cout<<endl;
}

int main(){
    int arr[] = {286, 747, 9, 39,738,666,8294,84,72,6};
    int size = sizeof(arr)/sizeof(int);

    display(arr, size);
    mrgSort(arr, size);
    display(arr, size);
    return 0;
}