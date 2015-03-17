class Array

 def bubble_sort
     n = self.length
     i = 0
     while i < n 
      m = i + 1 
             while m < n
                     if self[i] > self[m]
                         self[i], self[m] = self[m], self[i]
                     end
                 m += 1
             end
         i += 1
     end
     self
 end
end



# class Array
#  # array = [5,3,2,1,4]
#  def bubble_sort()
#    loop do
#      swapped = false
  
#      ((self.length)-1).times do |i|
#        if self[i] > self[i+1]
#          self[i], self[i+1] = self[i+1], self[i]
#          swapped = true
#        end
#      end
  
#      break if not swapped
#    end
#    self
#  end
# end